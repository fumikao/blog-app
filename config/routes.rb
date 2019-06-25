Rails.application.routes.draw do
  devise_for :users
  root 'blogs#index'
  resources :blogs, exceprt: :new do
    resources :comments, except: [:index, :new, :show]
    resources :likes, only: [:create, :destroy]
  end
  resources :users, only: [:show]
end