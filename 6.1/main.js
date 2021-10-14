let objects = [
        { name: 'Василий', surname: 'Васильев' },
        { name: 'Иван', surname: 'Иванов' },
        { name: 'Пётр', surname: 'Петров' }
    ]
    
    export default function filterFunction(array, property, value){
        return array.filter(item => {
            return item[property] === value;
          })
    };

    let result = filterFunction(objects, 'name', 'Василий');

    console.log(result);