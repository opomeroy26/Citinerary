class ActivitiesController < ApplicationController

    before_action :find_activity, only: [:show, :destroy, :update]
    skip_before_action :authorize, only: [:index, :show, :destroy, :update, :create]

    # GET /activities
    def index
        render json: Activity.all
    end

    def search 
        activities =  Activity.where({name: params[:name]})
        render json: activities
    end
    
    # GET /activites/:id
    def show 
        render json: @activity
    end

    # PATCH /activites/:id
    def update
        @activity.update!(activity_params)
        render json: @activity, status: :created
        # byebug
    end

    #POST /activities 
    def create 
        activity = Activity.create!(activity_params)
        render json: activity, status: :created 
    end

    # DELETE /activites/:id
    def destroy
        @activity.destroy
        head :no_content

    end


    private 

    def find_activity
        @activity = Activity.find(params[:id])
    end

    def activity_params
        params.permit(:name, :duration, :description, :user_id, :location_id, :like, :category_icon, :category_name)
        # params.require(:activity).permit(:id, :name, :duration, :description,  :like, user: [:id, :username, :password, :age, :profile_picture], location: [:id, :city], categories: [:id, :category_icon, :name])
    end

end
