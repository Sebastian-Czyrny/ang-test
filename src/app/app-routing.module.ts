import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PostsComponent } from './components/posts/posts.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
