Rails.application.routes.draw do
  devise_for :users
  root 'blogs#index'
  resources :blogs, exceprt: :new do
    resources :comments, except: [:index, :new, :show]
  end
  resources :users, only: [:index, :show]

  post '/blogs/:blog_id/likes' => "likes#create"
  delete '/blogs/:blog_id/likes' => "likes#destroy"
  get '/users/:user_id/likes' => "likes#show"
  
end