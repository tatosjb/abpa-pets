Rails.application.routes.draw do
  devise_for :users
  get '/people/find/:query', to: 'people#find'
  get '/people/find', to: 'people#find'
  resources :people

  root to: 'animals#index'

  post '/donate', to: 'adoption#donate', as: 'donate'

  resources :animals
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
