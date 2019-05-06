# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  photo_id   :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
    validates :author_id, :photo_id, :body, presence: true

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
    
    belongs_to :photo

end
