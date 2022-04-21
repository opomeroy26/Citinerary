class AddColumnToActivities < ActiveRecord::Migration[6.1]
  def change
    add_column :activities, :like, :boolean, :default => false
  end
end
