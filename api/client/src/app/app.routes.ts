import { Routes , RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';

const APP_ROUTES: Routes = [
    {path : '', component: HomeComponent},
    {path:'todolist',component:TodosComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);