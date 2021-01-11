import { IonicStorageModule } from '@ionic/storage';

export class StorageService{
    service:Storage=new Storage();

    constructor(){
        this.service=new Storage();
    }

    getItem(key:string){
        this.service.get(key).then((val: any) => {
            return val;
          });
    }
}

export const storageService = new StorageService();