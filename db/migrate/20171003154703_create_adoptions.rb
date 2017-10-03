class CreateAdoptions < ActiveRecord::Migration[5.1]
  def change
    create_table :adoptions do |t|
      t.references :animal, foreign_key: true
      t.references :person, foreign_key: true
      t.string :status

      t.timestamps
    end
  end
end
