import { View, StyleSheet, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses(props) {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expensesPeriod={"Total"}
      expenses={expensesCtx.expenses}
      fallbackText={"No expenses registered until now"}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AllExpenses;
