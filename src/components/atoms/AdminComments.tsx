/* eslint-disable no-return-assign */

'use client'

import Image from 'next/image'
import IconProfile from '@/components/icons/profile'
import { useState, useRef, useEffect } from 'react'

interface Comments {
  parentCommentId: number
  writer: string
  updatedAt: string
  content: string
  replies: Comments[]
}

export default function AdminComments() {
  const [comments, setComments] = useState<Comments[]>([])
  const [newComment, setNewComment] = useState('')
  const [showReplies, setShowReplies] = useState<{ [key: number]: boolean }>({})
  const [showReplyInput, setShowReplyInput] = useState<number | null>(null)
  const [newReply, setNewReply] = useState<{ [key: number]: string }>({})
  const replyInputRefs = useRef<{ [key: number]: HTMLInputElement | null }>({})

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value)
  }

  const handleReplyChange = (
    parentCommentId: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNewReply((prev) => ({
      ...prev,
      [parentCommentId]: e.target.value,
    }))
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          parentCommentId: comments.length + 1,
          writer: '나소유',
          updatedAt: '2024.05.01',
          content: newComment,
          replies: [],
        },
      ])
      setNewComment('')
    }
  }

  const handleAddReply = (parentCommentId: number) => {
    if (newReply[parentCommentId]?.trim()) {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.parentCommentId === parentCommentId
            ? {
                ...comment,
                replies: [
                  ...comment.replies,
                  {
                    parentCommentId: comment.replies.length + 1,
                    writer: '나소유',
                    updatedAt: '2024.05.01',
                    content: newReply[parentCommentId],
                    replies: [],
                  },
                ],
              }
            : comment,
        ),
      )
      setNewReply((prev) => ({
        ...prev,
        [parentCommentId]: '',
      }))
      setShowReplyInput(null)
      setShowReplies((prev) => ({
        ...prev,
        [parentCommentId]: true,
      }))
    }
  }

  const toggleReplies = (parentCommentId: number) => {
    setShowReplies((prev) => ({
      ...prev,
      [parentCommentId]: !prev[parentCommentId],
    }))
  }

  const toggleReplyInput = (parentCommentId: number) => {
    setShowReplyInput((prev) =>
      prev === parentCommentId ? null : parentCommentId,
    )
  }

  useEffect(() => {
    if (showReplyInput !== null && replyInputRefs.current[showReplyInput]) {
      replyInputRefs.current[showReplyInput]!.focus()
    }
  }, [showReplyInput])

  const handleKeyDownComment = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddComment()
    }
  }

  const handleKeyDownReply = (
    parentCommentId: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddReply(parentCommentId)
    }
  }

  return (
    <div className="flex flex-col text-[16px] font-normal mb-[120px] leading-[24px] text-gray-900 font-Pretendard">
      <div className="overflow-hidden pl-[40px] pr-[56px] h-[calc(100%-100px)]">
        <div className="text-[20px] leading-[28px] font-bold"> 댓글 4 </div>
        <div className="overflow-y-auto max-h-full scrollbar-hide">
          {comments.length === 0 ? (
            <div className="mt-[40px] text-center">
              <div className="text-lg text-gray-900 font-bold">
                아직 댓글이 없어요
              </div>
              <div className="text-sm text-gray-500 font-normal">
                사안에 대해 가장 먼저 댓글을 남겨보세요!
              </div>
            </div>
          ) : (
            comments.map((comment) => (
              <div key={comment.parentCommentId}>
                <div className="pt-[20px] px-[16px]">
                  <div className="flex items-center">
                    <div className="w-[36px] h-[36px]">
                      <IconProfile width="36px" height="36px" />
                    </div>
                    <div className="pl-[10px] flex gap-[4px] items-center">
                      <div className="text-base text-gray-900 font-bold">
                        {comment.writer}
                      </div>
                      <div className="flex h-[24px] px-[8px] py-[4px] items-center rounded-[8px] bg-blue-50 text-[13px] font-medium text-blue-700">
                        작성자
                      </div>
                      <div className="text-sm text-[#A4A4A4] font-normal">
                        {comment.updatedAt}
                      </div>
                    </div>
                  </div>
                  <div className="pl-[40px] m-[8px] text-base text-gray-900 font-normal">
                    {comment.content}
                  </div>
                  {comment.replies.length > 0 && (
                    <div className="ml-[40px] mt-[14px] flex text-sm items-center text-[#216FD6]">
                      <div className="font-medium">답글&nbsp;</div>
                      <div className="font-bold">{comment.replies.length}</div>
                      <button
                        type="button"
                        className="ml-[5px]"
                        onClick={() => toggleReplies(comment.parentCommentId)}
                      >
                        <Image
                          src={
                            showReplies[comment.parentCommentId]
                              ? '/icons/arrow_down_small.svg'
                              : '/icons/arrow_up_small.svg'
                          }
                          width={24}
                          height={24}
                          alt={
                            showReplies[comment.parentCommentId]
                              ? 'arrow_down_small'
                              : 'arrow_up_small'
                          }
                        />
                      </button>
                    </div>
                  )}

                  {showReplies[comment.parentCommentId] &&
                    comment.replies.map((reply) => (
                      <div
                        className="pt-[20px] pl-[40px] pr-[20px]"
                        key={reply.parentCommentId}
                      >
                        <div className="flex items-center">
                          <div className="w-[32px] h-[32px]">
                            <IconProfile width="32px" height="32px" />
                          </div>
                          <div className="pl-[10px] flex gap-[4px] items-center">
                            <div className="text-base text-gray-900 font-bold">
                              {reply.writer}
                            </div>
                            <div className="flex h-[24px] px-[8px] py-[4px] items-center rounded-[8px] bg-blue-50 text-[13px] font-medium text-blue-700">
                              작성자
                            </div>
                            <div className="text-sm text-[#A4A4A4] font-normal">
                              {reply.updatedAt}
                            </div>
                          </div>
                        </div>
                        <div className="mt-[8px] pl-[42px] text-base text-gray-900 font-normal">
                          {reply.content}
                        </div>
                      </div>
                    ))}
                  <div className="flex items-center justify-between h-[48px] mt-[24px] mb-[12px] pl-[16px] pr-[24px] py-[12px] border rounded-[10px] border-gray-300 bg-white">
                    <input
                      className="w-[100%] h-[36px] outline-none"
                      type="text"
                      placeholder="댓글에 대한 답글을 입력해주세요."
                      value={newReply[comment.parentCommentId] || ''}
                      onChange={(e) =>
                        handleReplyChange(comment.parentCommentId, e)
                      }
                      onKeyDown={(e) =>
                        handleKeyDownReply(comment.parentCommentId, e)
                      }
                      ref={(el) => {
                        replyInputRefs.current[comment.parentCommentId] = el
                      }}
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="flex justify-between items-center fixed bottom-0 w-[100%] h-[80px] gap-[16px] p-[24px] shrink-0 border-t bg-white border-gray-300">
        <Image
          src="/icons/chat_line.svg"
          width={32}
          height={32}
          alt="chat_line"
        />
        <input
          className="w-[100%] h-[36px] ext-[16px] text-left outline-none"
          placeholder="사안에 대한 댓글을 입력해주세요."
          type="text"
          value={newComment}
          onChange={handleCommentChange}
          onKeyDown={handleKeyDownComment}
        />
      </div>
    </div>
  )
}
