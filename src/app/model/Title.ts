import { Account } from './Account';
import { Category } from './Category';

export class Title {
    _id: string;
    title: string;
    description: string;
    value: number;
    type: string;
    account: Account;
    category: Category;
}