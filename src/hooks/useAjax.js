import axios from 'axios';

export default function useAjax(list, setList) {
    const baseURL = 'https://code401-authentication-system.herokuapp.com';
    
    const addItem = item => {
        axios({
            method: 'post',
            baseURL: baseURL,
            url: '/todo',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-origin': baseURL
            },
            data: JSON.stringify(item)
        }).then((savedItem) => {setList([...list, savedItem.data])}).catch(console.error);
    }

    const deleteItem = id => {
        axios({
            method: 'delete',
            baseURL: baseURL,
            url: `/todo/${id}`
        }).catch(console.error);
        
        let newList = list.filter((i) => i._id !== id) || {};
        setList(newList);
    }

    const toggleComplete =  id => {
        const item = list.filter((i) => i._id === id)[0] || {};
        axios({
            method: 'put',
            baseURL: baseURL,
            url: `${baseURL}/todo/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-origin': baseURL
            },
            data: JSON.stringify({ ...item, complete: !item.complete })
        }).then((savedItem) => {setList(list.map((listItem) =>listItem._id === item._id ? savedItem.data : listItem));
        }).catch(console.error);
    };

    const getTodoItems =  () => {
        axios({
            method: 'get',
            baseURL: baseURL,
            url: '/todo'
        }).then((response) => setList(response.data)).catch(console.error);
    };

    // CRUD => add, get, update, delete 
    return [addItem, getTodoItems, toggleComplete, deleteItem];
}