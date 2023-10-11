class EventEmitter {
   map = new Map() 
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
	subscribe(eventName, callback) {
      if( !this.map.has(eventName))	{
        this.map.set(eventName, []);
      }

      const arr = this.map.get(eventName)
      arr.push(callback)
		return {
			unsubscribe: () => {
			const index = arr.indexOf(callback)
            if ( index !== -1 ) {
                arr.splice(index , 1);
            }	
			}
		};
	}
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
	emit(eventName, args = []) {
        const callbacks = this.map.get(eventName) || [];
        return callbacks.map( callback => callback(...args))
	}
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */