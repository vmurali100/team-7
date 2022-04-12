import React from 'react'

export default function B({man,key}) {
  return (
    <div>
        <h1>
          {key} my name is-{man.name},from {man.city},email id{man.email}
        </h1>
    </div>
  )
}
