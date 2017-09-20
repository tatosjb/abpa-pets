class CreatePeople < ActiveRecord::Migration[5.1]
  def change
    create_table :people do |t|
      t.string :name
      t.string :rg
      t.string :cpf
      t.string :occupation
      t.string :company
      t.string :address
      t.string :neighborhood
      t.string :referece_point

      t.timestamps
    end
  end
end
