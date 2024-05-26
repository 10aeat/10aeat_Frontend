'use client'

import Image from 'next/image'
import IconProfile from '@/components/icons/profile'
import { useState } from 'react'

// interface commentsData {
//   id: string
//   content: string
//   updateAt: string // 잘 모르겠음
//   parentCommentId: null
//   isManager: boolean
//   writer: string
// }

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
  replies: Comment[];
}

export default function Comments({ isOpen, onClose }: ModalProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [showReplies, setShowReplies] = useState<{ [key: number]: boolean }>({})
  const [showReplyInput, setShowReplyInput] = useState<{
    [key: number]: boolean
  }>({})
  const [newReply, setNewReply] = useState<{ [key: number]: string }>({})

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value)
  }

  const handleReplyChange = (
    commentId: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNewReply((prev) => ({
      ...prev,
      [commentId]: e.target.value,
    }))
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          author: '나소유',
          date: '2024.05.01',
          content: newComment,
          replies: [],
        },
      ])
      setNewComment('')
    }
  }

  const handleAddReply = (commentId: number) => {
    if (newReply[commentId]?.trim()) {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                replies: [
                  ...comment.replies,
                  {
                    id: comment.replies.length + 1,
                    author: '나소유',
                    date: '2024.05.01',
                    content: newReply[commentId],
                    replies: [],
                  },
                ],
              }
            : comment,
        ),
      )
      setNewReply((prev) => ({
        ...prev,
        [commentId]: '',
      }))
      setShowReplyInput((prev) => ({
        ...prev,
        [commentId]: false,
      }))
    }
  }

  const toggleReplies = (commentId: number) => {
    setShowReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }))
  }

  const toggleReplyInput = (commentId: number) => {
    setShowReplyInput((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }))
  }

  return (
    <div className={`${isOpen ? 'translate-y-[0px]' : 'translate-y-full'} fixed transition-transform duration-500 top-0 justify-center w-[375px] h-[736px] pt-[27.85px] shrink-0 rounded-t-[24px] bg-white font-Pretendard`}
    onClick={(e) => e.stopPropagation()}>
      <div className="inline-flex items-start gap-[264px] w-[375px] h-[24px] px-[20px] shrink-0 bg-white">
        <div className="w-[47px] h-[24px] align-text-top text-gray-900 text-[18px] leading-6 font-bold">
          댓글
        </div>
        <button onClick={onClose}>
        <Image src="/icons/close.svg" width={24} height={24} alt="close" />
        </button>
      </div>
      <div className="h-[17.03px] border-b border-gray-300"></div>

      {comments.length === 0 ? (
        <div className="w-[375px] mt-[40px] text-center">
          <div className="text-lg text-gray-900 font-bold">
            아직 댓글이 없어요
          </div>
          <div className="text-sm text-gray-500 font-normal">
            사안에 대해 가장 먼저 댓글을 남겨보세요!
          </div>
        </div>
      ) : (
        comments.map((comment) => (
          <div key={comment.id}>
            <div className="pt-[20px] px-[20px]">
              <div className="flex items-center">
                <div className="w-[36px] h-[36px]">
                  <IconProfile width="36px" height="36px" />
                </div>
                <div className="pl-[10px] text-base text-gray-900 font-bold">
                  {comment.author}
                </div>
                <div className="pl-[4px] text-sm text-[#A4A4A4] font-normal">
                  {comment.date}
                </div>
              </div>
              <div className="m-[8px] text-base text-gray-900 font-normal">
                {comment.content}
              </div>
              <button
                className="ml-[8px] h-[20px] text-sm text-gray-900 font-bold"
                onClick={() => toggleReplyInput(comment.id)}
              >
                답글달기
              </button>

              {showReplyInput[comment.id] && (
                <div className="flex items-center fixed bottom-0 z-10 w-[375px] h-[50px] ml-[-20px] shrink-0 border-t bg-red-300 border-gray-300">
                  <input
                    className="w-[291px] h-[36px] my-[7px] ml-[20px] mr-[12px] shrink-0 rounded-[8px] pl-[14px] bg-red-100 outline-none"
                    type="text"
                    value={newReply[comment.id] || ''}
                    onChange={(e) => handleReplyChange(comment.id, e)}
                  />
                  <button
                    onClick={() => handleAddReply(comment.id)}
                    disabled={!newReply[comment.id]?.trim()}
                  >
                    <Image
                      src={
                        newReply[comment.id]?.trim()
                          ? '/icons/able_blue.svg'
                          : '/icons/able_base.svg'
                      }
                      width={32}
                      height={32}
                      alt="able_base"
                    />
                  </button>
                </div>
              )}
            </div>

            {comment.replies.length > 0 && (
              <div className="ml-[56px] mt-[14px] flex text-sm items-center text-[#216FD6]">
                <div className="font-medium">답글&nbsp;</div>
                <div className="font-bold">{comment.replies.length}</div>
                <button
                  className="ml-[5px]"
                  onClick={() => toggleReplies(comment.id)}
                >
                  <Image
                    src={
                      showReplies[comment.id]
                        ? '/icons/arrow_down_small.svg'
                        : '/icons/arrow_up_small.svg'
                    }
                    width={24}
                    height={24}
                    alt={
                      showReplies[comment.id]
                        ? 'arrow_down_small'
                        : 'arrow_up_small'
                    }
                  />
                </button>
              </div>
            )}

            {showReplies[comment.id] &&
              comment.replies.map((reply) => (
                <div className="pt-[20px] pl-[56px] pr-[20px]" key={reply.id}>
                  <div className="flex items-center">
                    <div className="w-[32px] h-[32px]">
                      <IconProfile width="32px" height="32px" />
                    </div>
                    <div className="pl-[10px] text-base text-gray-900 font-bold">
                      {reply.author}
                    </div>
                    <div className="pl-[4px] text-sm text-[#A4A4A4] font-normal">
                      {reply.date}
                    </div>
                  </div>
                  <div className="m-[8px] text-base text-gray-900 font-normal">
                    {reply.content}
                  </div>
                  <button className="ml-[8px] h-[20px] text-sm text-gray-900 font-bold">
                    답글달기
                  </button>
                </div>
              ))}
          </div>
        ))
      )}

      <div className="flex items-center fixed bottom-0 w-[375px] h-[50px] shrink-0 border-t bg-white border-gray-300">
        <input
          className="w-[291px] h-[36px] my-[7px] ml-[20px] mr-[12px] shrink-0 rounded-[8px] pl-[14px] bg-gray-100 outline-none"
          type="text"
          value={newComment}
          onChange={handleCommentChange}
        />
        <button onClick={handleAddComment} disabled={!newComment.trim()}>
          <Image
            src={
              newComment.trim()
                ? '/icons/able_blue.svg'
                : '/icons/able_base.svg'
            }
            width={32}
            height={32}
            alt="able_base"
          />
        </button>
      </div>
    </div>
  )
}