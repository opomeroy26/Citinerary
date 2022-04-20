class ActivitiesController < ApplicationController

    before_action :find_activity, only: [:show, :destroy]
    skip_before_action :authorize, only: [:index, :show, :destroy]

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


    #POST /activities 
    def create 
        activity = Activity.create(activity_params)
        render json: activity, status: :created 

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
        params.permit(:name, :duration, :description, :user_id, :location_id)
    end

end
