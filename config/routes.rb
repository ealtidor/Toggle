Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  resources :tenants, except: [:create]
  resources :properties do
    resources :tenants, only: :create
  end
  resources :users, only: :create 
end
