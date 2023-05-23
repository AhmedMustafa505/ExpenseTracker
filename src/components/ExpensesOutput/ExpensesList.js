import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(item) {
  return <ExpenseItem {...item} />;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderExpenseItem(item)}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ExpensesList;
