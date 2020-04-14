import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
    // DONE
  }

  public getBalance(): Balance {
    const income = this.transactions
      .filter(item => item.type === 'income')
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue.value;
      }, 0);
    const outcome = this.transactions
      .filter(item => item.type === 'outcome')
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue.value;
      }, 0);
    const total = income - outcome;
    const balance = { income, outcome, total };
    return balance;
    // DONE
  }

  public create({ title, type, value }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, type, value });
    this.transactions.push(transaction);
    return transaction;
    // DONE
  }
}

export default TransactionsRepository;
