//Balanced binary search tree

class NodeTree{

    constructor(value) {

        this.value = value
        this.left = null
        this.right = null
        
    }



}

class BalancedBST {

 constructor(){
    this.root = null
 }

 sortedToBST(arr,start,end) {
        
    arr = arr.sort((a,b)=>a-b)

    let newArr = [...arr]

    if(start > end){return null}

    let mid  = Math.round((start + end) / 2);

    let node = new NodeTree(newArr[mid])

    node.left = this.sortedToBST(newArr, start, mid -1)

    node.right = this.sortedToBST(newArr, mid + 1, end)

    this.root = node
    
    return this.root

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
        
      }
     else{
        if(node.right === null){
          node.right = new NodeTree(val)
          console.log('going right')
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
        }


      }
      
return node

      //end
    }

  
  
//end of class
  }
                
                const balancedBST = new BalancedBST()


                balancedBST.insertion(5)
                balancedBST.insertion(6)
                  balancedBST.insertion(4)
                    balancedBST.insertion(8)
                      balancedBST.insertion(3)
console.log(balancedBST.min())

                balancedBST.deleteNode(3)
                console.log(balancedBST.root)



  

