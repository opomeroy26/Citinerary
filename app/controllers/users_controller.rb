class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :update, :show]

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

    #PATCH /users/:id
    def update 
        user = User.find_by(id: params[:id])
        if user 
            user.update!(user_params)
            render json: user 
        else 
            render json: {error: "User not found"}, status: :not_found
        end
    end

    private 

    def user_params 
        params.permit(:username, :password, :age, :profile_picture) #password_confirmation?
    end
end
