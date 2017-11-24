import { observable } from 'mobx';

const HomeStore = observable(
    {
        open: false,
        anchorEl: '',
    }
);

const HomeStoreReset = JSON.parse(JSON.stringify(HomeStore));
export { HomeStore, HomeStoreReset }