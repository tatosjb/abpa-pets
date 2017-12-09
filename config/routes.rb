Rails.application.routes.draw do
  devise_for :users

  root to: 'animals#index'

  #People
  get '/people/find/:query', to: 'people#find_person'
  get '/people/find', to: 'people#find_person'
  get '/volunteer/find', to: 'people#find_volunteer'
  resources :people

  #Animals
  resources :animals

  #Adoption
  post '/donate', to: 'adoption#donate', as: 'donate'


  #Images
  post '/images/save', to: 'images#save_image', as: 'save_image'
  delete '/images/:id', to: 'images#destroy', as: 'destroy_image'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
