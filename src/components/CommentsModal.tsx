/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */

'use client'

import Image from 'next/image'
import IconProfile from '@/components/icons/profile'
import { useState, useRef, useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

interface Comments {
  parentCommentId: number
  writer: string
  updatedAt: string
  content: string
  replies: Comments[]
}

export default function CommentsComponent({ isOpen, onClose }: ModalProps) {
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

  return (
    <div
      className={`${isOpen ? 'translate-y-[0px]' : 'translate-y-[120%]'} fixed transition-transform z-10 duration-500 top-0 justify-center w-[375px] h-screen pt-[27.85px] shrink-0 rounded-t-[24px] bg-white font-Pretendard`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="inline-flex items-start gap-[264px] w-[375px] h-[24px] px-[20px] shrink-0 bg-white">
        <div className="w-[47px] h-[24px] align-text-top text-gray-900 text-[18px] leading-6 font-bold">
          댓글
        </div>
        <button onClick={onClose}>
          <Image src="/icons/close.svg" width={24} height={24} alt="close" />
        </button>
      </div>
      <div className="h-[17.03px] border-b border-gray-300" />
      <div className="overflow-hidden h-[calc(100%-100px)]">
        <div className="overflow-y-auto max-h-full scrollbar-hide">
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
              <div key={comment.parentCommentId}>
                <div className="pt-[20px] px-[20px]">
                  <div className="flex items-center">
                    <div className="w-[36px] h-[36px]">
                      <IconProfile width="36px" height="36px" />
                    </div>
                    <div className="pl-[10px] text-base text-gray-900 font-bold">
                      {comment.writer}
                    </div>
                    <div className="pl-[4px] text-sm text-[#A4A4A4] font-normal">
                      {comment.updatedAt}
                    </div>
                  </div>
                  <div className="m-[8px] text-base text-gray-900 font-normal">
                    {comment.content}
                  </div>
                  <button
                    className="ml-[8px] h-[20px] text-sm text-gray-900 font-bold"
                    onClick={() => toggleReplyInput(comment.parentCommentId)}
                  >
                    {showReplyInput === comment.parentCommentId
                      ? '답글달기 취소'
                      : '답글달기'}
                  </button>

                  {showReplyInput === comment.parentCommentId && (
                    <div className="flex items-center fixed bottom-0 z-10 w-[375px] h-[50px] ml-[-20px] mb-[30px] shrink-0 border-t bg-white border-gray-300">
                      <input
                        className="w-[291px] h-[36px] my-[7px] ml-[20px] mr-[12px] shrink-0 rounded-[8px] pl-[14px] bg-gray-100 outline-none"
                        type="text"
                        value={newReply[comment.parentCommentId] || ''}
                        onChange={(e) =>
                          handleReplyChange(comment.parentCommentId, e)
                        }
                        ref={(el) => {
                          replyInputRefs.current[comment.parentCommentId] = el
                        }}
                      />
                      <button
                        onClick={() => handleAddReply(comment.parentCommentId)}
                        disabled={!newReply[comment.parentCommentId]?.trim()}
                      >
                        <Image
                          src={
                            newReply[comment.parentCommentId]?.trim()
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
                      className="pt-[20px] pl-[56px] pr-[20px]"
                      key={reply.parentCommentId}
                    >
                      <div className="flex items-center">
                        <div className="w-[32px] h-[32px]">
                          <IconProfile width="32px" height="32px" />
                        </div>
                        <div className="pl-[10px] text-base text-gray-900 font-bold">
                          {reply.writer}
                        </div>
                        <div className="pl-[4px] text-sm text-[#A4A4A4] font-normal">
                          {reply.updatedAt}
                        </div>
                      </div>
                      <div className="m-[8px] text-base text-gray-900 font-normal">
                        {reply.content}
                      </div>
                      {/* <button className="ml-[8px] h-[20px] text-sm text-gray-900 font-bold">
                        답글달기
                      </button> */}
                    </div>
                  ))}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex items-center fixed bottom-0 w-[375px] h-[50px] mb-[30px] shrink-0 border-t bg-white border-gray-300">
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
