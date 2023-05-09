//Balanced binary search tree

class NodeTree{

    constructor(value) {

        this.value = value
        this.left = null
        this.right = null
        
    }



}

class BalancedBST {

 constructor(arr){
    
    this.arr = arr.sort((a,b)=>a-b)
    this.start = 0
    this.end = this.arr.length - 1 // if you dont put the -1 operation you will end up with one undefined value at the end of your array and sorting operation.
    this.root = null
    this.array = []
 }

 sortedToBST(arr = this.arr, start = this.start, end = this.end) {

  
    let newArr = [...arr]

    if(start > end){return null}

    let mid  = Math.floor((start + end) / 2);

   

    let node = new NodeTree(newArr[mid])

    

    node.left = this.sortedToBST(newArr,start, mid -1)

    node.right = this.sortedToBST(newArr,mid + 1, end)

    this.root = node

    return node

    }

min(node = this.root){
    let minValue = node.value
     
    if(node.left){
        
      minValue = node.left.value
      node = node.left
          return this.min(node.left)
     }
          return minValue
    }

    max(node = this.root){
      let maxValue = node.value
      if(node.right){
        maxValue = node.right.value
        node = node.right
        return this.max(node.right)
      }
      return maxValue
    }

    insertion(val, node = this.root){
      
      if(this.root === null){
        
        this.root = new NodeTree(val)
        return this.root
      }
      
      if(val < node.value){
        
        if(node.left === null){
          node.left = new NodeTree(val)
          console.log('going Left')
        }else{return this.insertion(val,node.left)}
        return node.left
      }
     else{
        if(node.right === null){
          node.right = new NodeTree(val)
          console.log('going right')
          return node.right
        }else{return this.insertion(val,node.right)}
        
      }
    
    }


    deleteNode(val,node = this.root){
      if(!node){return null}



      if(val < node.value){
        //traverse left node

          node.left = this.deleteNode(val,node.left)
          return node
      }else if(val > node.value){
      //traverse right node
        
          node.right = this.deleteNode(val,node.right)
          return node
      }else{

          //first case where node has no child nodes(leaf node)
        if(node.left === null && node.right === null){
          node = null
          return node
        
        }else if(node.left === null){
          node = node.right
          return node.right
        }else if(node.right === null){
          node = node.left
          return node.left
        }

        else{
         node.value = this.min(node.right)
         node.right = this.deleteNode(val,node.right)
        return node
        }


      }
      


      //end of method
    }

    find(val, node = this.root){

if(node === null){return null}

else if(val < node.value){
  
  return this.find(val,node.left)

}else if(val > node.value){
  
  return this.find(val,node.right)
}
else{return node}


//end of find method
    }
  
inOrder(node = this.root){

  if(node !== null){
    this.inOrder(node.left)
    console.log(node.value)
    this.inOrder(node.right)
  }
}

preOrder(node = this.root){

  if(node !== null){
    console.log(node.value)
    this.preOrder(node.left)
    this.preOrder(node.right)
  }

  
}

postOrder(node = this.root){

  if(node!==null){
    this.postOrder(node.left)
    this.postOrder(node.right)
    console.log(node.value)
  }
}


breadthFirst(){

  if(!this.root){return}
  this.queue = []
  this.queue.push(this.root)
  this.output = []

  while(this.queue.length){
    
    const node = this.queue.shift()
    
    if(node.left){
      this.queue.push(node.left)
    }

    if(node.right){
      this.queue.push(node.right)
    }
    this.output.push(node.value)
  }
  return this.output
}
//end of class
  }
     
  
  let array1 = [4,3,2,8,7,9,10,11,13,14]
                const balancedBST = new BalancedBST(array1)
balancedBST.sortedToBST()
//balancedBST.insertion(77777777)
console.log('Root value is: ' + balancedBST.root.value)
console.log(balancedBST.breadthFirst())
               /* balancedBST.insertion(5)
                balancedBST.insertion(6)
                  balancedBST.insertion(4)
                    balancedBST.insertion(8)
                      balancedBST.insertion(3)*/

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
      return;
  }
  if (node.right !== null) {
   return prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
   return prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}


prettyPrint(balancedBST.root)
