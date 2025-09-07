import { FlatList, Text, Image, View, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { Checkbox } from 'expo-checkbox';
import { use, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

type TodoType = {
  id: number;
  title: string;
  isDone: boolean;
}

export default function Index() {

  const todoData = [
    {
      id: 1,
      title: "todo 1",
      isDone: true,
    },
    {
      id: 2,
      title: "todo 2 ",
      isDone: true,
    },
    {
      id: 3,
      title: "todo 3 ",
      isDone: false,
    },
    {
      id: 4,
      title: "todo 4 ",
      isDone: false,
    },
    {
      id: 5,
      title: "todo 5 ",
      isDone: false,
    },
    {
      id: 6,
      title: "todo 6 ",
      isDone: false,
    },

  ]
  const [todo, setTodo] = useState<TodoType[]>([]);
  const [todoText, setTodoText] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [oldTodo, setOldTodo]= useState<TodoType[]>([]);

  useEffect(()=> {
    const getTodo = async()=>{
      try{
        const todo = await AsyncStorage.getItem('my-todo');
        if(todo !== null){
          setTodo(JSON.parse(todo));
          setOldTodo(JSON.parse(todo));
        }
      }catch(error){
        console.log(error);
      }
    };
    getTodo();
  },[])


  const addTodo = async() => {
    try{
      const newTodo = {
      id: Math.random(),
      title: todoText,
      isDone: false,
    };
    todo.push(newTodo);
    setTodo(todo);
    setOldTodo(todo);
    await AsyncStorage.setItem('my-todo', JSON.stringify(todo));
    setTodoText('');
    Keyboard.dismiss();
    }catch(error){
      console.log(error);
    }
  }

  const deleteTodo = async(id: number)=>{
    try{
      const newTodo = todo.filter((todo)=> todo.id !== id);
      await AsyncStorage.setItem("my-todo", JSON.stringify(newTodo));
      setTodo(newTodo);
      setOldTodo(newTodo);
    }catch(error){
      console.log(error);
    }
  }

  const handleDone = async (id : number)=>{
    try{
      const newTodo = todo.map((todo)=>{
        if(todo.id === id){
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
      await AsyncStorage.setItem("my-todo", JSON.stringify(newTodo));
      setTodo(newTodo);
      setOldTodo(newTodo);
    }catch(error){
      console.log(error);
    }
  }

  const onSearch = (query: string)=>{
    if(query == ''){
      setTodo(oldTodo);
    }else{
      const filteredTodo =  todo.filter((todo)=> todo.title.toLowerCase().includes(query.toLowerCase()));
    setTodo(filteredTodo);
    }
    
  };

  useEffect(()=> {
    onSearch(searchQuery);
  }, [searchQuery]);



  return (
    <SafeAreaView
      style={styles.container}

    >

      // header or navbar
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { alert('cliked me') }}>
          <Ionicons name="menu" size={30} color={'#333'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { alert('cliked me') }}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg' }} style={{ width: 50, height: 50, borderRadius: 20 }} />
        </TouchableOpacity>


      </View>

      // search bar
      <View style={styles.searchBar}>
        <Ionicons name="search" size={25} color={'#333'} />
        <TextInput placeholder="search" value={searchQuery} onChangeText={(text) => setSearchQuery(text)} style={styles.searchInput} />
      </View>


      <FlatList data={[...todo].reverse()} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => (
        <TodoItem todo={item} deleteTodo={deleteTodo} handleTodo={handleDone}/>
      )} />
      <KeyboardAvoidingView style={styles.footer} behavior="padding" keyboardVerticalOffset={10}>
        <TextInput placeholder="Add new To do " value={todoText} onChangeText={(text) => setTodoText(text)} style={styles.newTodoInput} autoCorrect={false}/>
        <TouchableOpacity style={styles.addButton} onPress={() => addTodo()}>
          <Ionicons name="add" size={24} color={'#fff'} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
    height: 40,
    borderColor: '#0c0a0aff',
  },
  searchInput: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,

  },
  todoInfoContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',

  },
  todoText: {
    fontSize: 16,
    color: 'black'

  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  newTodoInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    fontSize: 16,
    color: ' #333',
  },
  addButton: {
    backgroundColor: '#4630EB',
    padding: 8,
    borderRadius: 10,
    marginLeft: 20,
  }
})

const TodoItem = ({ todo, deleteTodo, handleTodo }: { todo: TodoType, deleteTodo: (id: number)=>void ,handleTodo: (id: number)=>void}) => (
  <View style={styles.todoContainer}>
    <View style={styles.todoInfoContainer}>

      <Checkbox value={todo.isDone} onValueChange={()=> handleTodo(todo.id)} color={todo.isDone ? '#4630EB' : undefined}></Checkbox>
      <Text style={[styles.todoText, todo.isDone && { textDecorationLine: "line-through" }]}>{todo.title}</Text>
    </View>
    <TouchableOpacity onPress={() => { deleteTodo(todo.id) }} >
      <Ionicons name="trash" size={24} color={'red'} />

    </TouchableOpacity>


  </View>
)
