import React from 'react'

const Page = ({ params }: { params: { id: string } }) => {
    const {id} = params;
  return (
    <h1>
      USER PROFILE:{" "}{id}
    </h1>
  )
}

export default Page
