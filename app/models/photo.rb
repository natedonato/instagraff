# == Schema Information
#
# Table name: photos
#
#  id         :bigint           not null, primary key
#  poster_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ApplicationRecord
    validates :poster_id, presence: true
    
    has_one_attached :pic
    
    has_many :likes

    has_many :comments,
    foreign_key: :photo_id,
    class_name: :Comment

    belongs_to :poster,
    foreign_key: :poster_id,
    class_name: :User
end
