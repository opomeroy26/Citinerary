class ActivitiesController < ApplicationController

    before_action :find_activity, only: [:show]

    # GET /activities
    def index
        render json: Activity.all
    end

    # GET /activites/:id
    def show 
        render json: @activity
    end


    private 

    def find_activity
        @activity = Activity.find(params[:id])
    end

    def activity_params
        params.permit(:name, :duration, :description, :user_id, :location_id)
    end

end
