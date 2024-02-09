import React, { useState } from 'react'

const PostsList = ({ products, productField, setProductField, handleSubmit, handleDelete }) => {
    console.log("product",products)
    const [modalStatus, setModalStatus] = useState(false);
    return (
        <>
            <div>
                <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button" onClick={() => setModalStatus(true)}>
                    Add new product
                </button>
            </div>
            <ModalCustom modalStatus={modalStatus} setModalStatus={setModalStatus} productField={productField} setProductField={setProductField} handleSubmit={handleSubmit} />
            <div className='max-w-5xl mx-auto'>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 :text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 :bg-gray-700 :text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product) => {

                                   
                                    return (
                                        <tr class="odd:bg-white even:bg-gray-50 border-b" key={product.id}>
                                            <th scope="row" class="text-lg px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                {`${product.title.substring(0, 30)}...`}
                                            </th>
                                            <td class="px-6 py-4">
                                                {`${product.price}`}
                                            </td>
                                            <td class="px-6 py-4">
                                                <a href="#" class="font-medium text-red-400 hover:underline" onClick={() => handleDelete(product.id)}>Delete</a>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default PostsList

const ModalCustom = ({ modalStatus, setModalStatus, productField, setProductField, handleSubmit }) => {
    return (
        <>
            <div id="authentication-modal" tabindex="-1" aria-hidden="true" class={`${modalStatus ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                <div class="relative p-4 w-full max-w-md max-h-full">
                    {/* <!-- Modal content --> */}
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Sign in to our platform
                            </h3>
                            <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal" onClick={() => setModalStatus(false)}>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div class="p-4 md:p-5">
                            <form class="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                    <input type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Lorem ipsum title here" required value={productField.title} onChange={(e) => setProductField(current => { return { ...current, title: e.target.value } })} />
                                </div>
                                <div>
                                    <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">price</label>
                                    <textarea type="text" name="content" id="content" placeholder="Lorem ipsum give some context here please" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required value={productField.price} onChange={(e) => setProductField(current => { return { ...current, price: e.target.value } })} />
                                </div>
                                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setModalStatus(false)}>Post</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}