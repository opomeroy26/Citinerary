class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :show]

    #Gets list of Users
    def index 
        render json: User.all
    end

    #Handles SignUp
    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created 

    end

    #Handles Staying LoggedIn
    def show 
        render json: @current_user
    end

    def user_params 
        params.permit(:username, :password) #password_confirmation?
    end
end
