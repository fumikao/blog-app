class CreateBlogs < ActiveRecord::Migration[5.0]
  def change
    create_table :blogs do |t|
      t.text :content, null: false
      t.string :image
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
