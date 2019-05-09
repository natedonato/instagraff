Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy, :show]
    resources :follows, only: [:create, :destroy, :show]
    resources :photos, only: [:create, :destroy, :show, :index]
    resources :comments, only: [:create, :destroy, :show]
  end

  root to: 'static_pages#root'

end
