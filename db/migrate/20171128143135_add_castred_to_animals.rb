class AddCastredToAnimals < ActiveRecord::Migration[5.1]
  def change
    add_column :animals, :castred, :boolean
  end
end
