import { useState } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Keyboard,
} from "react-native";
import { styles } from "./styles";

import { Infos } from "../../components/Infos";
import { EmptyTask } from "../../components/EmptyTask";
import { Task } from "../../components/Task";

interface ITasks {
  text: string;
  done: boolean;
}

export function Home() {
  const initialTasks = [
    {
      text: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
      done: false,
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam.",
      done: true,
    },
    {
      text: "Dolor sit amet consectetur adipisicing elit. Magnam.",
      done: true,
    },
  ];

  // const initialTasks = [];

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<ITasks[]>(initialTasks);

  const searchTask = (task: ITasks) => {
    const searchObject = tasks.find((item) => item.text == task.text);
    return searchObject;
  };

  const handleTaskAdd = (task: string) => {
    if (!task) {
      Alert.alert("Digite uma nova tarefa!");
      return null;
    }

    const taskFormated = {
      text: task,
      done: false,
    };
    if (searchTask(taskFormated)) {
      return Alert.alert("Tarefa existente", "Já existe essa tarefa");
    }
    setTasks((prevState) => [...prevState, taskFormated]);
    setTask("");
    // Keyboard.dismiss;
  };

  const removeTask = (taskText: string) => {
    const index = tasks.findIndex((item) => item.text == taskText);
    const toFilter = tasks.splice(index, 1);
    const newTasks = tasks.filter((item) => item !== toFilter);
    setTasks(newTasks);
  };

  const handleTaskRemove = (taskText: string) => {
    Alert.alert("Confirma a remoção da tarefa:", `${taskText}`, [
      {
        text: "Sim",
        onPress: () => removeTask(taskText),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  const handleTaskSelect = (taskText: string) => {
    const newTasks = tasks.map((obj) => {
      if (obj.text == taskText) {
        return { ...obj, done: !obj.done };
      } else {
        return obj;
      }
    });
    setTasks(newTasks);
  };

  return (
    <>
      <View style={styles.header}>
        <Image source={require("../../../assets/logo.png")} />
      </View>
      <View style={styles.container}>
        <View style={styles.containerInfo}>
          <Infos text="Criadas" value={tasks.length} color="#4ea8de" />
          <Infos
            text="Concluídas"
            value={tasks.filter((item) => item.done == true).length}
            color="#8284FA"
          />
        </View>
        <ScrollView style={styles.containerTasks}>
          {/* <EmptyTask /> */}

          {tasks.length == 0 ? (
            <EmptyTask />
          ) : (
            tasks.map((item) => {
              return (
                <Task
                  key={item.text}
                  done={item.done}
                  text={item.text}
                  onRemove={() => handleTaskRemove(item.text)}
                  onSelect={() => handleTaskSelect(item.text)}
                />
              );
            })
          )}
        </ScrollView>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={(e) => setTask(e)}
          value={task}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleTaskAdd(task)}
        >
          <Image source={require("../../../assets/plus.png")} />
        </TouchableOpacity>
      </View>
    </>
  );
}
