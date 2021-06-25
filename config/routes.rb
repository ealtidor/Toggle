Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # put '/tenants/:tenant_id/properties/:id', to: 'properties#add_tenant'
  resources :properties do
    resources :tenants, only: :create
  end
  resources :users, only: :create
  resources :tenants, except: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
