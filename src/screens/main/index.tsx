import React, { SetStateAction, useEffect, useState } from "react";
import { FlatList, Modal } from "react-native";

import {
  Container,
  Header,
  Input,
  InputWrapper,
  Title,
  Icon,
  Divider,
  ListInfoContainer,
  Footer,
  Action,
  Separator,
} from "./styles";
import { InformationLabel } from "../../components/InformationLabel";
import { AddItemModal } from "../addItemModal";
import { AddItem } from "../../components/AddItem";
import { ConfirmItemModal } from "../confirmItemModal";
import { Button } from "../../components/Button";
import { ListItem } from "../../components/ListItem";
import { View } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface IShopItem {
  id: number;
  quantity: number;
  itemName: string;
  price: number;
  purchased: boolean;
}

interface IInfo {
  countItem: number;
  total: number;
}

export const Main = () => {
  const [addItemModal, setAddItemModal] = useState(false);
  const [confirmItemModal, setConfirmItemModal] = useState(false);
  const [listItem, setListItem] = useState<Array<IShopItem>>([]);
  const [itemSelected, setItemSelected] = useState<IShopItem>({id:0, purchased: false, itemName: '', price: 0, quantity: 0});
  const [info, setInfo] = useState<IInfo>({countItem:0, total:0});

  useEffect(() => {
    getData()
}, []);

  useEffect(() =>{
    let count = 0;
    listItem.forEach(item => {
      count += item.quantity;
    })
    setInfo({countItem: count, total: info.total})
    storeData(listItem)
  }, [listItem])

  async function storeData(data: IShopItem[]){
    try {
      await AsyncStorage.setItem('listadecompras', JSON.stringify(data))
    } catch (error) {
      alert('Houve um erro ao tentar salvar seus dados');
      console.log(error)
    }
  }

  async function getData(){
    try {
      const data = await AsyncStorage.getItem('listadecompras');
      if (data != null) {
        setListItem(JSON.parse(data));
      }
    } catch (error) {
      console.log(error)
    }
  }

  function handleAddItemModal() {
    setAddItemModal((visibility) => !visibility);
  }

  function handleConfirmItemModal() {
    setConfirmItemModal((visibility) => !visibility);
  }

  function handleUpdateTotal(amount: number) {
    setInfo({total: amount + info.total, countItem: info.countItem})
  }

  function handleUpdateItem(id: string, price: number) {
    const newList = listItem.map( item => {
      if (String(item.id) === id) {
        item.purchased = true;
        item.price = price;
      }
      return item;
    });
    
    setListItem(newList);
  }

  function handleRemoveItem(id: number) {
    let newList: Array<IShopItem> = [];
    listItem.forEach(item => {
      console.log(item)
      if (item.id !== id) {
        newList.push(item)
      }

      if (item.id === id) {
        console.log('igual');
        setInfo({countItem: info.countItem, total: (info.total - (item.price * item.quantity))})
      }
    })
    setListItem(newList)
  }

  function handleConfirmItem( item: IShopItem ) {
    handleConfirmItemModal()
    setItemSelected(item);
  }

  function handleClearList() {
    setListItem([])
    setInfo({countItem: 0, total: 0})
  }

  return (
      <Container>
        <Header>
          <Icon name='cart-outline' />
          <Title>Lista de compras</Title>
        </Header>

        <Divider />

        <ListInfoContainer>
          <InformationLabel info='Itens:' value={`${info.countItem}`} type='COUNT' />
          <InformationLabel info='Total R$:' value={`${info.total}`} type='VALUE' />
        </ListInfoContainer>

        <InputWrapper>
          <Input />
        </InputWrapper>

      <View style={{height: '55%'}}>
        <FlatList
          data={listItem}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ListItem
            item={item}
             handlePurchaseAction={() => handleConfirmItem(item)}
             handleCancelAction={() => handleRemoveItem(item.id)}
             
            />
          )}
          ItemSeparatorComponent={ () => (<Separator />)}
        />
      </View>

        <Footer>
          <Action>
            <AddItem action={handleAddItemModal} />
          </Action>
          <Button text='Limpar lista' color='#E24330' action={handleClearList} />
        </Footer>

        <Modal
          visible={addItemModal || confirmItemModal}
          transparent
          statusBarTranslucent={true}
        >
          {addItemModal && <AddItemModal 
            cancelAction={handleAddItemModal} 
            itemList={listItem}
            setItemList={setListItem}

            />}
          {confirmItemModal && (
            <ConfirmItemModal 
              cancelAction={handleConfirmItemModal}
              item={itemSelected}
              updateItem={handleUpdateItem}
              saveBalance={handleUpdateTotal}
              />
          )}
        </Modal>
      </Container>
  );
};
