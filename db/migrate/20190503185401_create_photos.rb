class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :poster_id, null: false
      t.timestamps
    end
    add_index :photos, :poster_id
  end
end
