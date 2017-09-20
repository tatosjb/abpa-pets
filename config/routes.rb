Rails.application.routes.draw do
  resources :people
  root to: 'animals#index'

  resources :animals
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
