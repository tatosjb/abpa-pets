class AddApproximatedBornToAnimals < ActiveRecord::Migration[5.1]
  def change
    add_column :animals, :approximated_born, :boolean
  end
end
