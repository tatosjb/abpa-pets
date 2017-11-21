Rails.application.routes.draw do
  devise_for :users

  root to: 'animals#index'

  #People
  get '/people/find/:query', to: 'people#find'
  get '/people/find', to: 'people#find'
  resources :people

  #Animals
  resources :animals

  #Adoption
  post '/donate', to: 'adoption#donate', as: 'donate'


  #Images
  post '/images/save', to: 'images#save_image', as: 'save_image'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
