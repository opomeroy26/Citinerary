class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :location, null: false, foreign_key: true
      t.string :name
      t.integer :duration
      t.string :description

      t.timestamps
    end
  end
end
