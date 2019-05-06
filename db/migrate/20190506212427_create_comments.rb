class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :photo_id, null: false
      t.text :body, null: false
      t.timestamps
    end
    add_index :comments, :author_id
    add_index :comments, :photo_id
  end
end
