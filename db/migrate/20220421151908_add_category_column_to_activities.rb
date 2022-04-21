class AddCategoryColumnToActivities < ActiveRecord::Migration[6.1]
  def change
    add_column :activities, :category_name, :string 
    add_column :activities, :category_icon, :string 
  end
end
