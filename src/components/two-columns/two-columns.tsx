import React, { FC } from "react";
interface ITwoColumns {
  children: React.ReactNode
}

const TwoColumns:FC<ITwoColumns> = ({children}) => {
  return (
    <section>
      {children}
    </section>
  )
}