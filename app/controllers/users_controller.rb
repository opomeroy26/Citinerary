class UsersController < ApplicationController

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
        params.permit(:username, :age, :password, :profile_picture) #password_confirmation?
    end
end
