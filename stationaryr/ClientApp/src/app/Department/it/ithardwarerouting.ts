import { AuthGuard } from '../../services/auth.guard';
import { Routes } from '@angular/router';
import { ithardwaredepart } from '../it/ithardware';
import { ItHomeComponent } from './component/home/home';
import { GetItCategoryComponent } from './component/category/getcategory.component';
import { ItCategoryComponent } from './component/category/category.component';
import { GetItSubCategoryComponent } from './component/subcategory/getsubcategory.component';
import { ItSubCategoryComponent } from './component/subcategory/subcategory.component';
import { GetItSubChildCategoryComponent } from './component/subchildcategory/getsubchildcategory.component';
import { ItSubChildCategoryComponent } from './component/subchildcategory/subchildcategory.component';
//import { ContractMasterComponent } from './component/contractmaster/contractmaster';
//import { GetContractMasterComponent1 } from './component/contractmaster/getcontractmaster';
import { getitcontractmaster } from './component/contractmasterit/getcontractmasterit';
import { itcontractmaster } from './component/contractmasterit/contractmasterit';
import { ItDevicename } from './component/devicename/devicename';
import { ItGetDevicename } from './component/devicename/getdevicename';
export const routes: Routes = [
  {
    path: '', component: ithardwaredepart, canActivate: [AuthGuard]
    , children:[
      {
        path: 'home', component: ItHomeComponent 
        },
      { path: 'GetContractMaster', component: getitcontractmaster },
      { path: 'ContractMaster', component: itcontractmaster },
      { path: 'GetCategory', data: { link: 'Category' }, component: GetItCategoryComponent },
      { path: 'Category', component: ItCategoryComponent },
      { path: 'GetSubCategory', data: { link: 'SubCategory' }, component: GetItSubCategoryComponent },
      { path: 'SubCategory', component: ItSubCategoryComponent },
      { path: 'GetSubChildCategory', data: { link: 'SubChildCategory' }, component: GetItSubChildCategoryComponent },
      { path: 'SubChildCategory', component: ItSubChildCategoryComponent },
      { path: 'GetDevice', component: ItGetDevicename },
      { path: 'AddDevice', component: ItDevicename },
      //{ path: 'ContractMaster', component: ContractMasterComponent },

    ]
    
  }
];