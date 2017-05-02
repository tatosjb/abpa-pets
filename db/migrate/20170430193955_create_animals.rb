class CreateAnimals < ActiveRecord::Migration[5.1]
  def change
    create_table :animals do |t|
      t.integer :type
      t.integer :size
      t.integer :fur
      t.integer :color
      t.integer :gender
      t.date :birthdate
      t.text :description

      t.timestamps
    end
  end
end
